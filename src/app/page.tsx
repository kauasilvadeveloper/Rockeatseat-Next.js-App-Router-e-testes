import { Suspense } from "react";

import { GithubProfile } from "./components/github-profile";
import { LongWaitComponent } from "./components/long-wait-component";

export default async function Home() {
  return (
    <div>
      <h1>home</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem numquam
        blanditiis debitis illum consequuntur beatae! Quibusdam maxime molestias
        nostrum! Sunt ducimus dicta temporibus, nemo officia fuga doloribus
        quisquam laboriosam vel!
      </p>
      <Suspense fallback={<p>carregando LongWaitComponent</p>}>
        <LongWaitComponent />
      </Suspense>

      <Suspense fallback={<p>carregando GitHub profile</p>}>
        <GithubProfile />
      </Suspense>
    </div>
  );
}
