export default function Redirects() {
  let link = document.createElement("a");
  window.open(
    "https://drive.google.com/file/d/1fj4aTBunY4c8LKKoP95D6AwMRvsPtORu/view?usp=sharing"
  );
  link.href =
    "https://drive.google.com/uc?export=download&id=1fj4aTBunY4c8LKKoP95D6AwMRvsPtORu";

  link.click();

  link.remove();
}
