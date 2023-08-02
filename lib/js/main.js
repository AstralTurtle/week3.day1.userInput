mainTitle = document.getElementById("main_title");
// get inputs
titleField = document.getElementById("title_input");
nounField = document.getElementById("noun");
verbField = document.getElementById("verb");
adjectiveField = document.getElementById("adjective");

// get button
submit = document.getElementById("submit_button");

// add event listener
submit.addEventListener("click", submitForm);
titleField.addEventListener("change", updateTitle);

// function to submit form
function submitForm() {
	event.preventDefault();

	// get values from inputs
	title = titleField.value;
	noun = nounField.value;
	verb = verbField.value;
	adjective = adjectiveField.value;

	// check if all fields are filled
	if (title == "" || noun == "" || verb == "" || adjective == "") {
		alert("Please fill out all fields");
		return;
	}

	let story = madlib(title, noun, verb, adjective);
	// vanilla js from
	// form = document.querySelector(".form_container");
	// hideForm();
	$(".form_container").fadeOut(500);
	storyContainer = document.querySelector("#story_result");
	storyContainer.innerHTML = story;
}

// function to update title
function updateTitle() {
	mainTitle.innerHTML = titleField.value;
}

// function to update story
function madlib(title, noun, verb, adjective) {
	return `Yesterday I slept on a ${noun}, but today im going to ${verb}. It's going to be ${adjective}`;
}

// function to hide form slowly (vanilla js)
function hideForm() {
	form.style.opacity = 1;
	form.style.transition = "opacity 0.5s";
	form.style.opacity = 0;
}

updateTitle();
