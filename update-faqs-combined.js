const fs = require('fs');

const path = 'constants/translations.ts';
let content = fs.readFileSync(path, 'utf-8');

const combinedEnItems = `[
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
        },
        {
          question: "What are the clinic timings?",
          answer: "The clinic is open from 10:00 AM to 2:00 PM and from 4:00 PM to 8:00 PM.",
        },
        {
          question: "How much is the consultation fee?",
          answer: "The consultation fee is ₹200/- for both physical visits and video consultations.",
        },
        {
          question: "Do you offer dental implants?",
          answer: "Yes, Dr. Anil Prajapati specializes in Dental Implantology (fixed crowns, bridges, and full dentures).",
        },
        {
          question: "Can I book appointments online?",
          answer: "Yes, you can book online via Bajaj Finserv Health or chat with us on WhatsApp to set a slot.",
        }
      ]`;

const combinedHiItems = `[
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
        },
        {
          question: "क्लीनिक खुलने का समय क्या है?",
          answer: "क्लीनिक प्रतिदिन सुबह 10:00 बजे से दोपहर 2:00 बजे तक और शाम 4:00 बजे से रात 8:00 बजे तक खुलता है।",
        },
        {
          question: "परामर्श शुल्क कितना है?",
          answer: "क्लीनिक में व्यक्तिगत परामर्श और ऑनलाइन वीडियो परामर्श दोनों का शुल्क ₹200/- है।",
        },
        {
          question: "क्या आप दंत प्रत्यारोपण (डेंटल इंप्लांट) करते हैं?",
          answer: "हाँ, डॉ. अनिल प्रजापति डेंटल इम्प्लांटोलॉजी (फिक्स दांत कैप, ब्रिज और पूरी बत्तीसी) के विशेषज्ञ हैं।",
        },
        {
          question: "क्या मैं ऑनलाइन अपॉइंटमेंट बुक कर सकता हूँ?",
          answer: "हाँ, आप बजाज फिनसर्व हेल्थ के माध्यम से ऑनलाइन बुक कर सकते हैं या स्लॉट बुक करने के लिए व्हाट्सएप पर चैट कर सकते हैं।",
        }
      ]`;

let count = 0;
content = content.replace(/(faq:\s*\{[\s\S]*?items:\s*)\[[\s\S]*?\](\s*,?\s*\})/g, (match, before, after) => {
    count++;
    if (count === 1) {
        return before + combinedEnItems + after;
    } else if (count === 2) {
        return before + combinedHiItems + after;
    }
    return match;
});

fs.writeFileSync(path, content, 'utf-8');
console.log("Updated FAQs. Count:", count);
