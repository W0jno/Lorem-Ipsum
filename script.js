const loremIpsum = [
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas augue. Nulla vitae enim turpis. Ut egestas aliquam urna, vel consectetur nulla dignissim sed. Ut consectetur rutrum ultrices. Quisque suscipit egestas sapien dapibus lacinia. Fusce porttitor vestibulum tortor, id placerat enim imperdiet luctus. Donec sed scelerisque velit, sit amet efficitur magna. Sed at tempus felis, et pellentesque massa. Aliquam sed sapien in odio congue aliquam. Integer a feugiat nisl. Nunc gravida lectus nisi. Duis mollis scelerisque quam, nec sollicitudin lectus tempus ac.",
	"Duis consequat aliquam fringilla. Vestibulum vitae ante et ipsum suscipit consequat vitae nec purus. Aenean ex dui, varius non congue at, convallis eget metus. Suspendisse pellentesque diam eget nisl semper faucibus. Nunc eget ultricies augue. Nullam luctus rhoncus urna. Aliquam fermentum congue lectus. Suspendisse mollis eget dui in sollicitudin. Praesent id congue felis. Curabitur vel mollis erat, id placerat metus. Fusce porta enim leo, eu imperdiet arcu sagittis eu. Quisque augue turpis, vulputate eu vestibulum eu, condimentum vel tortor. Duis posuere interdum quam, eget eleifend ipsum iaculis non. Mauris suscipit, massa nec semper consectetur, arcu erat porttitor dui, non aliquet magna tortor in nulla. Nam pulvinar ultrices placerat.",
	"Morbi quis lectus eget dui fringilla convallis vitae sed urna. Quisque iaculis diam vel dolor vulputate volutpat. Donec sit amet lectus nec orci vehicula blandit consectetur a dui. Aliquam in dolor tempus nulla aliquet porta. Sed sed velit leo. Aliquam metus justo, interdum vel congue ut, facilisis in nunc. Nam vel metus non felis faucibus bibendum id ac sem. In et nibh accumsan, dictum velit eget, tincidunt sapien. In venenatis massa sit amet nisl sagittis, nec consequat enim viverra. Praesent vitae pharetra dolor. Mauris hendrerit arcu ex, eu eleifend nisi fringilla at. Sed est lacus, suscipit eget ligula sit amet, faucibus consequat nibh. Donec suscipit ullamcorper efficitur. Aenean venenatis dapibus velit, sit amet iaculis purus commodo fringilla. Maecenas ultricies suscipit egestas.",
	"Aenean malesuada tincidunt tortor et rutrum. Sed facilisis leo et posuere tempus. Donec mollis iaculis justo, lacinia ullamcorper mi volutpat et. Nulla scelerisque scelerisque orci, in egestas diam. Duis lobortis ullamcorper orci, sollicitudin facilisis massa maximus ut. Mauris non tortor pulvinar erat iaculis porta vel pellentesque ligula. Donec a eleifend dolor. Aenean condimentum augue vitae diam lobortis pharetra. Etiam scelerisque malesuada mi, sed aliquet justo molestie vel. Vestibulum non mi imperdiet, dictum dolor non, ullamcorper ante. Integer aliquet tristique aliquet. Nunc leo mauris, pellentesque eget condimentum et, luctus sed leo. Quisque condimentum, velit ut ullamcorper cursus, diam risus suscipit nisi, vitae pretium nisl ipsum in libero. Maecenas tincidunt urna at neque ornare mollis. Sed egestas nisi et dui tempus, quis vestibulum tellus lacinia. Sed in fermentum lorem.",
	"Etiam diam justo, bibendum pretium fringilla ut, maximus non arcu. Donec vulputate rhoncus tortor, sed tincidunt ante gravida vitae. Suspendisse potenti. Maecenas porttitor erat consequat faucibus eleifend. Maecenas condimentum sapien sit amet fringilla sollicitudin. In id convallis ipsum, eu ultricies leo. Duis malesuada justo vel varius porta. Nunc commodo nisi a ipsum dictum, eget bibendum felis laoreet. Praesent suscipit aliquet massa, eu pulvinar nibh condimentum non. Suspendisse non bibendum mauris.",
];
const rangeValue = document.getElementById("rangeValue");
const numberValue = document.getElementById("numberValue");
const submitBtn = document.getElementById("submitBtn");
const loremIpsumPlace = document.querySelector(".loremIpsumPlace");
const dupa = () => {
	numberValue.value = rangeValue.value;
};

var t = setInterval(dupa, 10);
submitBtn.addEventListener("click", () => {
	let tempText = loremIpsum.slice(0, numberValue.value);
	tempText = tempText
		.map((item) => `<p class='loremIpsumPlace'>${item}</p>`)
		.join("");

	loremIpsumPlace.innerHTML = tempText;
});
