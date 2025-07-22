
export const generateWhatsAppLink = (
  phoneNumber: string,
  productName?: string,
  price?: string
) => {
  const baseMessage = productName && price 
    ? `Olá! Gostaria de saber mais sobre o produto *${productName}* no valor de ${price}. Poderia me fornecer mais informações?`
    : 'Olá! Gostaria de saber mais informações sobre os produtos da farmácia.';
  
  const encodedMessage = encodeURIComponent(baseMessage);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

export const openWhatsApp = (
  phoneNumber: string,
  productName?: string,
  price?: string
) => {
  const link = generateWhatsAppLink(phoneNumber, productName, price);
  window.open(link, '_blank');
};

// Número padrão da farmácia (pode ser alterado conforme necessário)
export const PHARMACY_WHATSAPP = "5511999999999";
