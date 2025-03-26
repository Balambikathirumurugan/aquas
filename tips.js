function showTip(disease) {
    const tipText = document.getElementById("tipText");
    const fishImage = document.getElementById("fishImage");

    const tips = {
        bodyFluke: {
            text: "Symptoms: Clamped fins, excessive mucus, difficulty breathing.\nTreatment: Anti-parasitic medication and water changes.",
            img: "images/body_fluke.jpg"
        },
        anchorWorm: {
            text: "Symptoms: Worm-like parasite attached to fish.\nTreatment: Manual removal and anti-parasitic bath.",
            img: "images/anchor_worm.jpg"
        },
        ich: {
            text: "Symptoms: White spots on body, rubbing against objects.\nTreatment: Increase water temperature and use ich treatment.",
            img: "images/ich.jpg"
        },
        finRot: {
            text: "Symptoms: Torn fins, blackened edges.\nTreatment: Clean water and antibacterial medication.",
            img: "images/fin_rot.jpg"
        }
    };

    tipText.innerText = tips[disease].text;
    fishImage.src = tips[disease].img;
}