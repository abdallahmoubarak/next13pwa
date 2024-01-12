interface Button {
  text: String;
}
export default function Button({ text }: Button) {
  return <button className="py-4 w-full bg-lime-600 rounded-lg">{text}</button>;
}
