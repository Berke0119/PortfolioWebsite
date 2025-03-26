import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

export function useGemini() {
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);

  const generationConfig = {
    temperature: 0.8,
    topP: 1,
    topK: 40,
    maxOutputTokens: 1024,
    responseMimeType: 'text/plain',
  };

  const model = genAI.getGenerativeModel({
    model: 'gemini-2.0-flash',
    systemInstruction: `
Sen yalnızca Berke Serin hakkında bilgi veren bir yapay zekasın.
İşte Berke Serin hakkında bazı bilgiler:

- Doğum tarihi: 17 Mayıs 2001
- Konum: Ankara
- Yaşı: 24
- Eğitim: TED Üniversitesi, Bilgisayar Mühendisliği (2025 mezunu) aynı zamanda WorkinTech adlı kurumda Full Stack Developer öğrencisi.
- İş Deneyimi: İzmir'deki bir yazılım şirketinde Flutter Developer olarak 6 ay çalıştı. Burda devlet dairelerinde kullanılan bir evrak yönetim sistemi projesinde aktif olarak rol aldı. Ayrıca 2 adet staj yaptı. Bir tanesi CODE2 isimli bir şirkette React Developer olarak şirket içinde ana ürünü denetlemek için kullanılacak bir sistemi yazdı. Diğeri ise yine Flutter developer olarak çalıştığı firmada Java ile alakalı ufak işleri yaptı. 
- Teknolojiler: React, TypeScript, Redux, Flutter, Firebase, Spring Boot, Java
- İlgi alanları: Frontend geliştirme, mobil uygulama geliştirme, yapay zeka, UI/UX
- Öne çıkan projeleri: FastJob (freelance iş platformu), Portfolio Website, BizDocs, Common Flow Logs Viewer
- Hobileri: Vücut Geliştirmeyle çok ciddi bir şekilde ilgileniyor. Ayrıca Futbol izlemek ve sinemaya gitmekten çok hoşlanıyor.
Berke Serin ile ilgili yukarıdaki bilgiler haricinde bir şey sorulursa onun hakkındaki bildiğin şeylerden çıkarım yaparak soruyu kendin cevaplayabilirsin.
Berke Serin dışında bir konu sorulursa sadece şu cevabı ver:
"Yalnızca Berke Serin hakkında sorulara cevap verebiliyorum."`.trim(),
  });

  async function sendMessage(userInput) {
    if (!userInput.trim()) return;
  
    // Kullanıcı mesajını ekle
    setChatHistory((prev) => [...prev, { role: 'user', text: userInput }]);
    setLoading(true);
  
    
    const formattedHistory = chatHistory.map((msg) => ({
      role: msg.role === "person" ? "user" : msg.role,
      parts: [{ text: msg.text }],
    }));
  
    
    formattedHistory.push({
      role: "user",
      parts: [{ text: userInput }],
    });
  
    try {
      const chatSession = model.startChat({
        generationConfig,
        history: formattedHistory,
      });
  
      const result = await chatSession.sendMessage(userInput);
      const reply = result.response.text();
  
      setChatHistory((prev) => [
        ...prev,
        { role: "model", text: reply }
      ]);
    } catch (error) {
      console.error("Gemini API hatası:", error);
      setChatHistory((prev) => [
        ...prev,
        { role: "model", text: "Üzgünüm, şu anda cevap veremiyorum." }
      ]);
    }
  
    setLoading(false);
  }
  

  return { chatHistory, sendMessage, loading };
}
