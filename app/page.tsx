import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">a home made of words. </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
  i was anxious.<br />
  not the usual nervous kind — the kind that eats at you.<br />
  trapped in my own head. overthinking everything.<br />
  every noise felt loud. every silence louder.
</p>

<p>
  then i started writing.<br />
  not to impress. not to be read. just to survive.<br />
  stories i lived. pain i carried. healing i never thought would come.
</p>

<p>
  this blog is that.<br />
  a place to let it out.<br />
  to make something from the mess.
</p>

<p>
  stories i’ve seen.<br />
  battles i’ve fought quietly.<br />
  the slow climb out.
</p>

<p>
  writing became a way through.<br />
  maybe it'll be that for you too.
</p>

<p>
  this is for anyone feeling too much.<br />
  you’re not alone.<br />
  read. feel. maybe write too.<br />
  this is a home built out of words — broken, messy, honest ones.
</p>

<p>
  <em>welcome in.</em>
</p>

      </div>
    </section>
  );
}
