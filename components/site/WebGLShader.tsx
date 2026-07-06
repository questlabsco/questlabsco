"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// Hero background shader (from 21st.dev, adapted):
// - contained to its parent section instead of the whole viewport
// - dimmed in the fragment shader so it sits easy behind text
export function WebGLShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const vertexShader = `
      attribute vec3 position;
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;
      uniform float xScale;
      uniform float yScale;
      uniform float distortion;

      void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

        float d = length(p) * distortion;

        float rx = p.x * (1.0 + d);
        float gx = p.x;
        float bx = p.x * (1.0 - d);

        float r = 0.05 / abs(p.y + sin((rx + time) * xScale) * yScale);
        float g = 0.05 / abs(p.y + sin((gx + time) * xScale) * yScale);
        float b = 0.05 / abs(p.y + sin((bx + time) * xScale) * yScale);

        // dimmed so it stays easy on the eyes behind hero text
        gl_FragColor = vec4(vec3(r, g, b) * 0.32, 1.0);
      }
    `;

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(new THREE.Color(0x000000));
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, -1);

    const uniforms = {
      resolution: { value: [parent.clientWidth, parent.clientHeight] },
      time: { value: 0.0 },
      xScale: { value: 1.0 },
      yScale: { value: 0.5 },
      distortion: { value: 0.05 },
    };

    const position = [
      -1.0, -1.0, 0.0, 1.0, -1.0, 0.0, -1.0, 1.0, 0.0, 1.0, -1.0, 0.0, -1.0,
      1.0, 0.0, 1.0, 1.0, 0.0,
    ];
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(position), 3)
    );
    const material = new THREE.RawShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let animationId: number | null = null;

    const handleResize = () => {
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      renderer.setSize(w, h, false);
      uniforms.resolution.value = [w, h];
    };

    const animate = () => {
      uniforms.time.value += 0.010;
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    handleResize();
    // Always animated: this is a purely decorative backdrop (slow color
    // drift, no flashing), so it intentionally ignores prefers-reduced-motion.
    animate();

    const ro = new ResizeObserver(handleResize);
    ro.observe(parent);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      ro.disconnect();
      scene.remove(mesh);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full block pointer-events-none"
      aria-hidden="true"
    />
  );
}

export default WebGLShader;
