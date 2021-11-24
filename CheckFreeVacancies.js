
function checkFreeVacancies (arrayOfVacancies) {
	let levelOfJob = '';
	let experienceYears;
	const candidate = {
		name: prompt('Fill in your name'),
		experience: prompt('Enter your work experience'),
		skills: [],
		direction: '',
		desiredPosition: ''
	};
	const possitionEstimate = {
		junior: {
			from: 0, 
			to : 1.5
		},
		middle: {
            from: 1.6,
            to: 3
		},
		senior: {
            from: 3.1,
            to: 8
		}
	}
    for(;;) {
    	let a = prompt('Enter your skills')
    	if (a == null) {
    		break;
    	}
    	candidate.skills.push(a.toUpperCase());
    }
 		if(candidate.experience <= 1.5) {
 			levelOfJob = 'Junior';
 		}else if(candidate.experience > 1.5 && candidate.experience <= 3) {
 			levelOfJob = 'Middle';
 		}else if(candidate.experience > 3) {
 			levelOfJob = 'Senior'; 
 		}
 		console.log(levelOfJob);
 		for(let key in possitionEstimate) {
 			if(key.toUpperCase() == levelOfJob.toUpperCase()) {
 				experienceYears = possitionEstimate[key].to + 0.1;
 			}console.log(experienceYears);
 		}
 		if(candidate.skills.indexOf('JS') != -1 && (candidate.skills.indexOf('PHP') != -1 || candidate.skills.indexOf('C++') != -1 || candidate.skills.indexOf('Java') != -1)) {
 			candidate.direction = 'Full-stack';
 		}else if(candidate.skills.indexOf('JS') != -1) {
            candidate.direction = 'Front-End';
 		}else if(candidate.skills.indexOf('PHP') != -1 || candidate.skills.indexOf('C++') != -1 || candidate.skills.indexOf('Java') != -1){
 			candidate.direction = 'Back-end';
 		}
 		console.log(candidate.direction);
 	candidate.desiredPosition = `${levelOfJob} ${candidate.direction}`;
 	console.log(candidate.desiredPosition);
 	if(arrayOfVacancies.indexOf(candidate.desiredPosition) != -1) {
 		console.log(`Dear ${candidate.name}.We can offer you a vacancy for your position ${candidate.desiredPosition} `);
 	}else{console.log(`Dear ${candidate.name}.We can't to offer you a vacancy for your position ${candidate.desiredPosition} ,You need to have ${Math.round(experienceYears - candidate.experience)} years of experience more`);
    }
  }

  checkFreeVacancies(['Junior Front-End', 'Middle Back-end','Senior Full-stack','Middle Front-End']);

