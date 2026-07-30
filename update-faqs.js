const fs = require('fs');

const path = 'constants/translations.ts';
let content = fs.readFileSync(path, 'utf-8');

const newEnItems = `[
        {
          question: "Do you provide wiring, braces, or aligner treatments?",
          answer: "Yes, we treat misaligned, protruding, and gapped teeth using advanced intraoral 3D scanning, braces, and clear aligners.",
        },
        {
          question: "Does teeth cleaning cause wearing or loosen the teeth?",
          answer: "No, ultrasonic scalers only remove plaque and germs without wearing down enamel. Cleaning prevents diseases like bleeding gums, swelling, and pyorrhea, stopping bone loss and strengthening gums.",
        },
        {
          question: "Doctor, I have this problem... how much will it cost? (Over WhatsApp/Call)",
          answer: "A proper clinical examination is required before suggesting a treatment plan or cost. It is not advisable to determine fees without a physical check-up.",
        }
      ]`;

const newHiItems = `[
        {
          question: "क्या आप वायरिंग/ ब्रेसेस/ अलाइनर करते हैं?",
          answer: "हाँ, ऑर्थोडोंटिक ट्रीटमेंट जैसे आड़े तिरछे , बाहर निकले , दाँतो में गैप इत्यादि मरीजों का इलाज इंट्राओरल 3D स्कैन अत्याधुनिक मशीनों से ब्रेसेस और अलाइनर के माध्यम से इलाज किया जाता है ।",
        },
        {
          question: "क्या दाँतो की सफ़ाई से दाँतो का घिसना व दाँत हिल तो नहीं जाते?",
          answer: "नहीं, किसी भी स्थान, वस्तु या शरीर के अंगों की सफ़ाई से उसके जीवन की समयसीमा दोगुनी हो जाती है । अल्ट्रा सोनिक स्केलर मशीन के माध्यम दाँतो के ऊपर जमी हुई सिर्फ़ गंदगी या जर्म्स दूर होते हैं दाँतो पर कोई असर नहीं पड़ता और ना ही दाँत घिसते हैं, बल्कि स्केलिंग से भविष्य में होने वाले कई बीमारियों ( मसूड़ों से खून आना, सूजन या मवाद निकलना, दुर्गंध आना) पायरिया से बचा जा सकता है और दाँतो मसूड़ों की लाइफ बढ़ जाती है, दाँतो की जड़ो के आसपास हड्डियों का गलना बंद हो जाता है जिससे दाँतो का हिलना बंद हो जाता है।",
        },
        {
          question: "व्हाट्सएप/ कॉल पर— डॉ साब मुझे ये...समस्या है, कितना लगेगा??",
          answer: "पहले मरीज़ को देखकर समस्या समझी जाती है फिर अच्छी तरह से जाँच होती है इसके बाद ट्रीटमेंट प्लान किया जाता है। बिना जाँच किए, फ़ीस बताना न डॉ के लिए सही है और ना ही मरीज़ के लिए।",
        }
      ]`;

let count = 0;
content = content.replace(/(faq:\s*\{[\s\S]*?items:\s*)\[[\s\S]*?\](\s*,?\s*\})/g, (match, before, after) => {
    count++;
    if (count === 1) {
        return before + newEnItems + after;
    } else if (count === 2) {
        return before + newHiItems + after;
    }
    return match;
});

fs.writeFileSync(path, content, 'utf-8');
console.log("Updated FAQs. Count:", count);
