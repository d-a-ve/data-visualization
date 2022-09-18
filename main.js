// the country array i am working with
const countries = [
	'Afghanistan',
	'Albania',
	'Algeria',
	'Andorra',
	'Angola',
	'Antigua and Barbuda',
	'Argentina',
	'Armenia',
	'Australia',
	'Austria',
	'Azerbaijan',
	'Bahamas',
	'Bahrain',
	'Bangladesh',
	'Barbados',
	'Belarus',
	'Belgium',
	'Belize',
	'Benin',
	'Bhutan',
	'Bolivia',
	'Bosnia and Herzegovina',
	'Botswana',
	'Brazil',
	'Brunei',
	'Bulgaria',
	'Burkina Faso',
	'Burundi',
	'Cambodia',
	'Cameroon',
	'Canada',
	'Cape Verde',
	'Central African Republic',
	'Chad',
	'Chile',
	'China',
	'Colombi',
	'Comoros',
	'Congo (Brazzaville)',
	'Congo',
	'Costa Rica',
	"Cote d'Ivoire",
	'Croatia',
	'Cuba',
	'Cyprus',
	'Czech Republic',
	'Denmark',
	'Djibouti',
	'Dominica',
	'Dominican Republic',
	'East Timor (Timor Timur)',
	'Ecuador',
	'Egypt',
	'El Salvador',
	'Equatorial Guinea',
	'Eritrea',
	'Estonia',
	'Ethiopia',
	'Fiji',
	'Finland',
	'France',
	'Gabon',
	'Gambia, The',
	'Georgia',
	'Germany',
	'Ghana',
	'Greece',
	'Grenada',
	'Guatemala',
	'Guinea',
	'Guinea-Bissau',
	'Guyana',
	'Haiti',
	'Honduras',
	'Hungary',
	'Iceland',
	'India',
	'Indonesia',
	'Iran',
	'Iraq',
	'Ireland',
	'Israel',
	'Italy',
	'Jamaica',
	'Japan',
	'Jordan',
	'Kazakhstan',
	'Kenya',
	'Kiribati',
	'Korea, North',
	'Korea, South',
	'Kuwait',
	'Kyrgyzstan',
	'Laos',
	'Latvia',
	'Lebanon',
	'Lesotho',
	'Liberia',
	'Libya',
	'Liechtenstein',
	'Lithuania',
	'Luxembourg',
	'Macedonia',
	'Madagascar',
	'Malawi',
	'Malaysia',
	'Maldives',
	'Mali',
	'Malta',
	'Marshall Islands',
	'Mauritania',
	'Mauritius',
	'Mexico',
	'Micronesia',
	'Moldova',
	'Monaco',
	'Mongolia',
	'Morocco',
	'Mozambique',
	'Myanmar',
	'Namibia',
	'Nauru',
	'Nepal',
	'Netherlands',
	'New Zealand',
	'Nicaragua',
	'Niger',
	'Nigeria',
	'Norway',
	'Oman',
	'Pakistan',
	'Palau',
	'Panama',
	'Papua New Guinea',
	'Paraguay',
	'Peru',
	'Philippines',
	'Poland',
	'Portugal',
	'Qatar',
	'Romania',
	'Russia',
	'Rwanda',
	'Saint Kitts and Nevis',
	'Saint Lucia',
	'Saint Vincent',
	'Samoa',
	'San Marino',
	'Sao Tome and Principe',
	'Saudi Arabia',
	'Senegal',
	'Serbia and Montenegro',
	'Seychelles',
	'Sierra Leone',
	'Singapore',
	'Slovakia',
	'Slovenia',
	'Solomon Islands',
	'Somalia',
	'South Africa',
	'Spain',
	'Sri Lanka',
	'Sudan',
	'Suriname',
	'Swaziland',
	'Sweden',
	'Switzerland',
	'Syria',
	'Taiwan',
	'Tajikistan',
	'Tanzania',
	'Thailand',
	'Togo',
	'Tonga',
	'Trinidad and Tobago',
	'Tunisia',
	'Turkey',
	'Turkmenistan',
	'Tuvalu',
	'Uganda',
	'Ukraine',
	'United Arab Emirates',
	'United Kingdom',
	'United States',
	'Uruguay',
	'Uzbekistan',
	'Vanuatu',
	'Vatican City',
	'Venezuela',
	'Vietnam',
	'Yemen',
	'Zambia',
	'Zimbabwe'
]


const mainData = document.querySelector(".main-data");
const p = document.querySelector(".p");
const numberOfCountries = document.querySelector(".countries-length");
const input = document.querySelector("input");
const startingLetterBtn = document.querySelector(".starting-word");
const anyLetterBtn = document.querySelector(".any-letter");
const sortBtn = document.querySelector(".sort");
const azLetter = document.querySelector(".letter");
const arrowDown = document.querySelector(".sort svg")

// reversed countries array
const reversedCountries = [];

// reversing the countries array with for loop
for(i = countries.length - 1; i >= 0; i--){
	reversedCountries.push(countries[i]);
}

//calling the function to display list of countries
countryName(countries);


// eventListeners for the search btns

startingLetterBtn.addEventListener("click", e => {
	e.preventDefault();
	input.addEventListener("input", e => {
		startWith(e.target.value);
	});
});

anyLetterBtn.addEventListener("click", e => {
	e.preventDefault();
	input.addEventListener("input", e => {
		searchWithAnyLetter(e.target.value);
	})
});

// sorting btn
sortBtn.addEventListener("click", e => {
	e.preventDefault();
	reverseCountries();
})


// functions

function searchWithAnyLetter(elem) {
	let arr = document.querySelectorAll(".country-container p");

	//array for storing the countries that have the input letter
	let currentInputArray = []


	for (let x of arr) {
		if (!x.textContent.toLowerCase().includes(elem.toLowerCase())) {
			x.parentElement.style.display = "none";
		} else {
			x.parentElement.style.display = "flex";
			currentInputArray.push(x.textContent);
		}
	}

	// displaying the current input value and the countries having that letter
	p.innerHTML = `Countries containing <span class="red">${elem}</span> are <span class="green">${currentInputArray.length}</span>`;

}

function startWith(elem) {
	let arr = document.querySelectorAll(".country-container p");
	//array for storing the countries that have the input letter
	let currentInputArray = []

	for (let x of arr) {
		if (!x.textContent.toLowerCase().startsWith(elem.toLowerCase())) {
			x.parentElement.style.display = "none";
		} else {
			x.parentElement.style.display = "flex";
			currentInputArray.push(x.textContent);
		}
	}

	// displaying the current input value and the countries having that letter
	p.innerHTML = `Countries containing <span class="red">${elem}</span> are <span class="green">${currentInputArray.length}</span>`;
}

function countryName(arr) {
	arr.forEach(country => {
		let container = document.createElement("div");
		container.className = "country-container";

		let para = document.createElement("p");
		para.textContent = country;

		container.appendChild(para);
		mainData.appendChild(container);
	})
	numberOfCountries.textContent = arr.length;
}

function reverseCountries() {
	let arr = document.querySelectorAll(".country-container p");

	if (arr[0].textContent.charAt(0).toLowerCase() === "a") {
		mainData.innerHTML = "";

		azLetter.style.flexDirection = "column-reverse";
		arrowDown.style.transform = "rotate(180deg)";
		countryName(reversedCountries)
	}
	
	if (arr[0].textContent.charAt(0).toLowerCase() == "z") {
		mainData.innerHTML = "";

		azLetter.style.flexDirection = "column";
		arrowDown.style.transform = "rotate(0deg)";
		countryName(countries);
	}

}