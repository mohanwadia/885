document.addEventListener("DOMContentLoaded", function () {
    const subjects = [
        "Unlock the 885",
        "885 bus 7 days",
        "Sunday buses for Wanda St",
        "7 days for 885 bus",
        "Wanda St 885 bus",
        "Sunday Mulgrave buses",
        "885 bus - Wanda St - 7 days",
        "885 Mulgrave bus",
        "Need for 7 day 885 bus",
        "885 bus on Sundays",
        "Sunday buses for 885 route",
        "More trips on route 885 bus",
        "885 bus on Sundays please",
        "More trips on route 885 bus",
        "885 bus - request for 7 day service",
        "885 route bus better service",
        "Sunday service on 885 bus",
        "Sunday 885 bus",
        "7 days for 885 bus",
        "Sunday buses for Wanda St",
        "885 bus running 7 days request"
    ]

    const eden_greeting = [
        'Dear Ms Foster,',
        'Hi Eden,',
        'To Ms Foster',
        'Hello Eden,',
        'Dear Eden,',
        'To the Minister',
        'Dear Minister'
    ]

    const gabrielle_greeting = [
        'Dear Ms Williams,',
        'Hi Gabrielle,',
        'To Ms Williams',
        'Hello Gabrielle,',
        'Dear Gabrielle,',
        'To the Minister,',
        'Dear Minister'
    ]

    const issue = [
`I live near Wanda St Mulgrave. 885 is my nearest bus. 
It finishes early at night and doesn’t run Sundays – times I and others want to travel but can't.`,
`I rely on local buses to get around. The main problem is that they finish early at night & don’t run Sundays. Especially the 885 which goes along Wanda St Mulgrave near where I live. 
Other suburbs have all buses 7 days. But we in Mulgrave have been neglected without the transport we need.`,
`I’m a Mulgrave resident. Hope you can help me with something.There’s no train station near here. We rely on buses for our public transport. 
It’s a bit of a walk to Springvale Rd so the 885 is our nearest bus. Unfortunately it has a very limited service. Eg nothing evenings or Sundays. Even though it should.`,
`I use buses for various trips from my home near Wanda St. It’s a bit of a struggle as the 885 doesn’t run at all times I need it. Most specifically Sunday service or evenings.   
Other places get 7 day buses but not us on the 885.`,
`Is there any chance you can get the 885 bus on Wanda St to run Sundays and a bit later at night? 
I think it would be really popular & help people get to shops, shops, sports etc. 
Not everyone has a car and 7 day buses would save many people money.`,
`Taking buses saves me money. And they’re convenient. 
But one thing would make them better. That is them running 7 days. 
The 885 which I’m on has a restricted timetable.`,
`My local 885 bus on Wanda St doesn’t run on Sundays or evenings. 
I and others would love the opportunity to use the bus 7 days.`,
`I wish to suggest having 7 day service on the 885 bus along Wanda St Mulgrave. 
Right now the restricted timetable means we can’t travel on Sundays or after dark. 
Other areas have 7 day buses going everywhere so why not us?`,
`Living in Mulgrave I don’t have a station nearby. 
My nearest bus is the 885. It’s only hourly on Saturdays and doesn’t run on Sundays. 
Good buses help people achieve their dreams by linking them to opportunity and jobs. That can be life-changing.`,
`I rarely contact politicians but today am asking your help as you have influence over this. 
It’s regarding the 885 bus on Wanda St Mulgrave near my home. 
Only a limited service runs, especially weekends. Eg no Sunday or evening service operates.`,
`Just wanted to ask why our local bus the 885 doesn’t run 7 days and if there’s any plans to get it to. 
People in other parts of Melbourne get Sunday service on all their bus routes. And evening trips. 
Why can’t we have this too on the 885 along Wanda St?`,
`Buses go many places & mean that I needn’t worry about driving or accidents. 
But there’s one thing that I want to ask. Why doesn’t our Wanda St bus, the 885, run 7 days?  
More people would use it if it did. And having independence without asking for lifts or paying ubers would be great – especially for seniors.`,
`Lucky parts of Melbourne have all their buses running 7 days. But we near Wanda St do not.`,
`I sometimes use the local buses. Their timetables have hardly changed in years with no Sunday service on the 885 which conveniently goes to Glen Waverley and Springvale.   
My request is for it to run longer hours / 7 days. This would make so many peoples lives better, especially those who work in retail etc.`,
` I have a suggestion that would make a lot of people happy. 
We need our 885 bus in Mulgrave to run 7 days. 
People often work 7 days and it’s too expensive to be paying for ubers all the time.`,
`We need buses running 7 days a week in Mulgrave on our 885 route. 
It’s amazing it doesn’t already given the number of people who’d benefit.`,
`My suggestion is better buses. More specifically 7 day service on the 885 in Mulgrave. 
This area has little transport at times people wish to travel. 
A better bus would help me get to Springvale and Glen Waverley. `,
`I’m a Mulgrave area resident & have some ideas on how buses could be made more useful. 
Most important is they run longer hours. My nearest bus is the 885. 
Please check its timetable. You’ll see it finishes early at night and does not run Sundays. 
Yet other part of Melbourne get better buses than us, especially on weekends. 
Our lives don’t vanish on weekends even if a lot of our buses do.`,
`There is something that would help many. 7 day buses. 
Currently my nearest bus 885 on Wanda St doesn’t run Sundays or evenings. 
But service then would make it much more useful. `,
`I live near Wanda St Mulgrave. The nearest bus is the 885. 
This only runs once an hour on Saturdays with nothing on Sundays. Even though people need to travel 7 days. 
The 885 timetable hasn’t changed for years even though better service is justified. `
    ]

    const eden_cta = [
        'Please write to Minister Gabrielle Williams requesting that the 885 be upgraded to seven days.',
        'Can you tell the minister of transport that we need better public transport in Mulgrave, and making the 885 run on sundays would make a huge difference.',
        'Please advocate to Gabrielle Williams on our behalf for the 885 to be a better service.',
        'Eden, will you meet with Mulgrave residents to hear how the lack of Sunday service on the 885 leaves people like me stuck at home on weekends?',
        'Will you advocate for better buses in Mulgrave to make sure our suburb is not left behind?',
        'Can you ask Ms Williams to look into getting us more buses on Wanda St?',
        'Eden, the 885 is so important to us to get between Glen Waverley and Springvale. Our community deserves a bus that runs when the shops are actually open. On Sundays.',
        'Why does our community not get seven-day service, while so many others do?',
        'We already do not have a train station near us, the 885 lets us get there, if only it ran on sundays. I need you to fix this.'
    ]

    const gabrielle_cta = [
        'Mulgrave asks you to promise that you will upgrade the Route 885 to get us where we need to go seven days a week. At this point, its not a huge ask, its a nessesity.',
        'It is unacceptable that in 2026, a really popular route connecting two activity centers has zero Sunday service. As the minister, we ask you to provide the funding to put the 885 on the road 7 days a week.',
        'Minister, the 885 serves us with a good service on weekdays, yet not only lets us down on weekends, but traps us in our houses. Please act now.',
        'Ms Williams, will you commit to funding the 885 in the upcoming budget to fix its issues?',
        
    ]

    const thanks = [
        'Yours sincerely',
        'Cheers',
        'Kind regards',
        'Thanking you',
        'Thanks',
        'Yours faithfully',
        'Yours sincerely',
        'Best regards',
        'Many thanks',
        'Sincerely',
        'Thank you',
        'I look forward to hearing from you',
        'I look forward to hearing back',
    ]

    // Generate Random Email
    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    const randomIssue = issue[Math.floor(Math.random() * issue.length)];
    const randomThanks = thanks[Math.floor(Math.random() * thanks.length)];

    // Create URL
    const recipients = ["gabrielle.williams@parliament.vic.gov.au", ""];
    if (Math.floor(Math.random() * 2) == 0) {
        recipient = "gabrielle.williams@parliament.vic.gov.au"
        greeting = gabrielle_greeting[Math.floor(Math.random() * gabrielle_greeting.length)]
        cta = gabrielle_cta[Math.floor(Math.random() * gabrielle_cta.length)]
    }
    else {
        recipient = "eden.foster@parliament.vic.gov.au"
        greeting = eden_greeting[Math.floor(Math.random() * eden_greeting.length)]
        cta = eden_cta[Math.floor(Math.random() * eden_cta.length)]

    }
    const randomBody = greeting + '\n\n' + randomIssue + '\n\n' + cta + '\n\n' + randomThanks
    const encodedSubject = encodeURIComponent(randomSubject);
    const encodedBody = encodeURIComponent(randomBody.replace(/\r?\n/g, '\r\n'));
    const encodedCc = encodeURIComponent("mail@unlockthe885.com");
    const finalMailto = `mailto:${recipient}?subject=${encodedSubject}&body=${encodedBody}&cc=${encodedCc}`;
    
    const linkElement = document.getElementById('email-link');
    if (linkElement) {
        linkElement.href = finalMailto;
    } 
    const linkElement2 = document.getElementById('email-link-2');
    if (linkElement2) {
        linkElement2.href = finalMailto;
    }
        const linkElement3 = document.getElementById('email-link-3');
    if (linkElement3) {
        linkElement3.href = finalMailto;
    }
});