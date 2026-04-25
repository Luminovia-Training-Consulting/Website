import Badge from "../components/Badge.jsx";
import Card from "../components/Card.jsx";

export default function ImprintPage() {
  return (
    <main className="px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Badge>Legal notice</Badge>
        <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl">Imprint</h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          Legal information for this website, based on the existing imprint of carinaschoppe.com.
        </p>

        <div className="mt-10 grid gap-5">
          <Card>
            <h2 className="text-2xl font-black text-white">Information according to Section 5 TMG</h2>
            <div className="mt-5 space-y-1 text-slate-300">
              <p>Carina Sophie Schoppe</p>
              <p>Under the Hakenberge 5</p>
              <p>37619 Bodenwerder</p>
              <p>Germany</p>
            </div>
          </Card>

          <Card>
            <h2 className="text-2xl font-black text-white">Contact</h2>
            <div className="mt-5 space-y-1 text-slate-300">
              <p>Phone: 01755738757</p>
              <p>Email: <a className="font-bold text-cyan-100 hover:text-white" href="mailto:info@carinaschoppe.com">info@carinaschoppe.com</a></p>
            </div>
          </Card>

          <Card>
            <h2 className="text-2xl font-black text-white">Editorial responsibility</h2>
            <p className="mt-5 text-slate-300">Carina Sophie Schoppe</p>
          </Card>

          <Card>
            <h2 className="text-2xl font-black text-white">EU dispute resolution</h2>
            <p className="mt-5 leading-7 text-slate-300">
              The European Commission provides a platform for online dispute resolution:
              {" "}
              <a className="font-bold text-cyan-100 hover:text-white" href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noreferrer">https://ec.europa.eu/consumers/odr/</a>.
              You can find the email address in the legal notice above.
            </p>
          </Card>

          <Card>
            <h2 className="text-2xl font-black text-white">Consumer dispute resolution</h2>
            <p className="mt-5 leading-7 text-slate-300">
              I am not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
            </p>
          </Card>
        </div>
      </div>
    </main>
  );
}
