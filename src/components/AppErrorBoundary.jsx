import {Component} from "react";
import Button from "./Button.jsx";

export default class AppErrorBoundary extends Component {
    state = {error: null};

    static getDerivedStateFromError(error) {
        return {error};
    }

    componentDidCatch(error, info) {
        if (import.meta.env.DEV) {
            console.error(error, info);
        }
    }

    render() {
        if (!this.state.error) return this.props.children;
        if ("fallback" in this.props) return this.props.fallback;

        return (
            <main className="mx-auto flex min-h-[70vh] w-full max-w-4xl items-center px-4 py-24 sm:px-6 lg:px-8">
                <section className="glass-panel w-full rounded-[2rem] p-8 sm:p-10">
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-sky-200">
                        Page recovery
                    </p>
                    <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
                        This page could not load cleanly.
                    </h1>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                        The website is still available, but this view ran into a loading problem. This can happen after a fresh deployment while the browser still has an older JavaScript file cached.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Button onClick={() => globalThis.location.reload()}>
                            Reload page
                        </Button>
                        <Button href="/contact#contact-options" variant="secondary">
                            Contact
                        </Button>
                    </div>
                </section>
            </main>
        );
    }
}
