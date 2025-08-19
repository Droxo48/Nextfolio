import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function HomePage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">
        A home made of words.
      </h1>

      <p className="mb-4">
        i was anxious.<br />
        not the usual nervous kind — the kind that eats at you.<br />
        trapped in my own head. overthinking everything.<br />
        every noise felt loud. every silence louder.
      </p>

      <p className="mb-4">
        then i started writing.<br />
        not to impress. not to be read. just to survive.<br />
        stories i lived. pain i carried. healing i never thought would come.
      </p>

      <p className="mb-4">
        this blog is that.<br />
        a place to let it out.<br />
        to make something from the mess.
      </p>

      <p className="mb-4">
        stories i’ve seen.<br />
        battles i’ve fought quietly.<br />
        the slow climb out.
      </p>

      <p className="mb-4">
        writing became a way through.<br />
        maybe it'll be that for you too.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        what you’ll find here
      </h2>

      <ul className="list-disc list-inside mb-6">
        <li>real stories. no filters.</li>
        <li>fragments of pain, pieces of healing.</li>
        <li>thoughts that kept me up. and the ones that finally let me sleep.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        why this exists
      </h2>

      <p className="mb-4">
        because i needed a place.<br />
        because maybe you do too.<br />
        because words can hold what we can’t always say.<br />
        because writing made it bearable.
      </p>

      <p className="mb-6">
        this is for anyone feeling too much.<br />
        you’re not alone.<br />
        read. feel. maybe write too.<br />
        this is a home built out of words — broken, messy, honest ones.
      </p>

      <p className="italic">
        welcome in.
      </p>
    </section>
  );
}
