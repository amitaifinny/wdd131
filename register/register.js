const addParticipantButton = document.getElementById('add');
let participantCount = 1;

function participantTemplate(count) {
    return `
        <section class="participant${count}">
        <p>Participant ${count}</p>
        <div class="item">
        <label for="fname"> First Name<span>*</span></label>
        <input id="fname${count}" type="text" name="fname" value="" required="">
        </div>
        <div class="item activities">
        <label for="activity">Activity #<span>*</span></label>
        <input id="activity${count}" type="text" name="activity">
        </div>
        <div class="item">
        <label for="fee">Fee ($)<span>*</span></label>
        <input id="fee${count}" type="number" name="fee">
        </div>
        <div class="item">
        <label for="date">Desired Date <span>*</span></label>
        <input id="date${count}" type="date" name="date">
        </div>
        <div class="item">
        <p>Grade</p>
        <select>
            <option selected="" value="" disabled=""></option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
            <option value="5">5th</option>
            <option value="6">6th</option>
            <option value="7">7th</option>
            <option value="8">8th</option>
            <option value="9">9th</option>
            <option value="10">10th</option>
            <option value="11">11th</option>
            <option value="12">12th</option>
        </select>
        </div>
    </section>
  `;
}

addParticipantButton.addEventListener('click', () => {
    participantCount++;
    const newParticipantHTML = participantTemplate(participantCount);
    addParticipantButton.insertAdjacentHTML('beforebegin', newParticipantHTML);
});

function totalFees() {
  let feeElements = document.querySelectorAll("[id^=fee]");
  feeElements = [...feeElements];
  return feeElements.reduce((total, element) => total + (parseFloat(element.value) || 0), 0);
}

function successTemplate(info) {
  return `Thank you ${info.name} for registering. You have registered ${info.participants} participants and owe $${info.fees} in Fees.`;    
}

function submitForm(event) {
  event.preventDefault();
  const totalFee = totalFees();
  const adultName = document.getElementById("adult_name").value;
  const summary = document.getElementById("summary");

  document.querySelector("form").style.display = "none";
  summary.textContent = successTemplate({ name: adultName, participants: participantCount, fees: totalFee });
  summary.style.display = "block";
}

document.querySelector("form").addEventListener("submit", submitForm);
// const form = document.getElementById('submitButton');
// const summaryElement = document.getElementById('summary');

// function totalFees() {
//   const feeElements = [...document.querySelectorAll("[id^=fee]")];
// //   console.log(feeElements)
//   return feeElements.reduce((total, element) => total + parseFloat(element.value), 0);
// }

// function successTemplate(info) {
//   return `
//     Thank you ${info.adultName} for registering. You have registered ${info.participantCount} participants and owe $${info.feeTotal} in Fees.
//   `;
// }

// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const adultName = document.getElementById('adult_name').value;
//   const participantCount = document.querySelectorAll('.participants').length;
//   const feeTotal = totalFees();

//   summaryElement.innerHTML = successTemplate({ adultName, participantCount, feeTotal });
//   form.style.display = 'none';
//   summaryElement.style.display = 'block'; // Or use a pre-defined class for hiding/showing
//   element.classlist.add('hide')
// });

// document.querySelector("form").addEventListener("submit", submitForm);