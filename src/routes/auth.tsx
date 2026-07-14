import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { assets } from "@/lib/products";

export const Route = createFileRoute("/auth")({
  head: () => ({ meta: [{ title: "Sign In — ManaCouture" }] }),
  component: AuthPage,
});

function AuthPage() {
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <div className="min-h-[80vh] grid lg:grid-cols-2">
      <div className="hidden lg:block relative bg-secondary">
        <img src={assets.hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary/25" />
        <div className="absolute bottom-16 left-16 text-primary-foreground max-w-sm">
          <div className="eyebrow text-primary-foreground/80 mb-3">The Atelier</div>
          <div className="font-display text-4xl leading-tight">Sign in to unlock private previews & atelier appointments.</div>
        </div>
      </div>

      <div className="flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-md">
          <Link to="/" className="font-display text-3xl">ManaCouture</Link>
          <h1 className="font-display text-3xl md:text-4xl mt-10">
            {mode === "login" ? "Welcome back" : "Create account"}
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            {mode === "login" ? "Sign in to your account" : "Join the ManaCouture atelier"}
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-4">
            {mode === "register" && (
              <Field label="Full name" />
            )}
            <Field label="Email address" type="email" />
            <Field label="Password" type="password" />

            {mode === "login" && (
              <div className="flex justify-between text-xs">
                <label className="flex items-center gap-2 text-muted-foreground">
                  <input type="checkbox" className="accent-accent" /> Remember me
                </label>
                <button type="button" className="link-underline">Forgot password?</button>
              </div>
            )}

            <button className="btn-luxe btn-luxe-hover w-full">
              {mode === "login" ? "Sign In" : "Create Account"}
            </button>
          </form>

          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs eyebrow">or</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="space-y-3">
            <button className="btn-outline-luxe w-full hover:bg-primary hover:text-primary-foreground transition-colors">
              Continue with Google
            </button>
            <button className="btn-outline-luxe w-full hover:bg-primary hover:text-primary-foreground transition-colors">
              Continue with Apple
            </button>
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            {mode === "login" ? "New to ManaCouture?" : "Already have an account?"}{" "}
            <button
              onClick={() => setMode(mode === "login" ? "register" : "login")}
              className="link-underline text-foreground font-medium"
            >
              {mode === "login" ? "Create account" : "Sign in"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <label className="block">
      <span className="text-[11px] eyebrow block mb-1.5">{label}</span>
      <input type={type} className="w-full h-12 px-3 bg-background border border-border focus:border-foreground outline-none text-sm" />
    </label>
  );
}
