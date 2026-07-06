import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-white">
      <div className="container-site page-hero pb-32 text-center">
        <h1 className="text-4xl font-bold text-ink tracking-tight">
          This page doesn&apos;t exist
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          The link may be outdated. Everything we do is reachable from the
          homepage.
        </p>
        <div className="mt-8">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
