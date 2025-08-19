import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function HomePage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">
        A home made of words.
      </h1>

      <p className="mb-4">
        i am a khatarnakh lekakh.<br />
        aaj friday hai
      </p>

      <p className="mb-4">
        technologia.<br />
        kis colour ki chaddi pahne ho
      </p>

      <p className="mb-4">
        this blog is that.<br />
        a place to let it out.<br />
        haaye garmi
      </p>

      <p className="mb-4">
        stories i’ve seen.<br />
        mms<br />
        the slow climb out.
      </p>

      <p className="mb-4">
        oo.<br />
        8=====D.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        what you’ll find here
      </h2>

      <ul className="list-disc list-inside mb-6">
        <li>mms.</li>
        <li>desi.</li>
        <li>viral.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        why this exists
      </h2>

      <p className="mb-4">
        because i needed it.<br />
        because maybe you do too.<br />
        zaroori hai.<br />
        
      </p>

      <p className="mb-6">
        this is for all.<br />
        you’re not alone.<br />
        okay.<br />
        this is amazing.
      </p>

      <p className="italic">
        welcome in.
      </p>
    </section>
  );
}
