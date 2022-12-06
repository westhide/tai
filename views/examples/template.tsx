import { List } from "@/components";
import { signal } from "@/reactive";

export function Item(item: string, index: number) {
  return (
    <div>
      <span text={item}></span>
      <span text={index}></span>
    </div>
  );
}

export function cmpt() {
  const s1 = signal(1);

  const each = ["A", "B", "C"];
  return (
    <div>
      <div>R1</div>
      {s1}
      <div>R3</div>
      <div on:click={() => s1.update(s1.value + 1)}>Count</div>
      <List each={each} item={Item}></List>
    </div>
  );
}
