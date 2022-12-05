import { signal } from "@/reactive";

export function cmpt() {
  const s1 = signal(1);

  return (
    <div>
      <div>R1</div>
      {s1}
      <div>R3</div>
      <div on:click={() => s1.update(s1.value + 1)}>Count</div>
    </div>
  );
}
