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

    const bodies = [
        `Dear Ms Foster and Ms Williams,
        I live near Wanda St Mulgrave. 885 is my nearest bus. 
        It finishes early at night and doesn’t run Sundays – times I and others want to travel but can't.
        Are you able to make a commitment that should you win the govt will upgrade the 885 route to run 7 days?   
        I look forward to hearing from you. 
        Thankyou`,
        `Hi Gabrielle and Eden,
        I rely on local buses to get around. The main problem is that they finish early at night & don’t run Sundays. Especially the 885 which goes along Wanda St Mulgrave near where I live. 
        Other suburbs have all buses 7 days. But we in Mulgrave have been neglected without the transport we need.  
        This is an important issue for me. Could you please assure me that you will get this fixed?
        Cheers`,
        `Hi Eden, I’m a Mulgrave resident. Hope you can help me with something with the by-election.
        There’s no train station near here. We rely on buses for our public transport. It’s a bit of a walk to Springvale Rd so the 885 is our nearest bus. Unfortunately it has a very limited service. Eg nothing evenings or Sundays. Even though it should. 
        Can you explain to me why this is and what you are doing to get the 885 to run 7 days? 
        Kind regards`
    ]
    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)]
    const randomBody = bodies[Math.floor(Math.random() * bodies.length)];
    const recipients = ["gabrielle.williams@parliament.vic.gov.au", "eden.foster@parliament.vic.gov.au"];
    const encodedSubject = encodeURIComponent(randomSubject);
    const encodedBody = encodeURIComponent(randomBody.replace(/\r?\n/g, '\r\n'));
    const encodedCc = encodeURIComponent("mail@unlockthe885.com");
    const finalMailto = `mailto:${recipients.join(',')}?subject=${encodedSubject}&body=${encodedBody}&cc=${encodedCc}`;
    const linkElement = document.getElementById('email-link');
    if (linkElement) {
        linkElement.href = finalMailto;
    }
});