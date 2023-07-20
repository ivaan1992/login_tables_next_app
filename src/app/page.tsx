"use client";

import { signOut } from "next-auth/react";

export default function Index() {
  return (
    <>
      <h1>HOLA MUNDO</h1>
      <button onClick={() => signOut()}>logout</button>
    </>
  );
}
