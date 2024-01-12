interface Button {
  text: String;
}
export default function Button({ text }: Button) {
  return (
    <button className="py-4 w-full bg-blue-600 rounded-lg text-white">
      {text}
    </button>
  );
}
