import QRCode from "qrcode";

export const generateQRCode = async (
  eventId: string
): Promise<string> => {
  try {
    const qrData = JSON.stringify({
      eventId,
      timestamp: Date.now(),
    });

    const qr = await QRCode.toDataURL(qrData);

    return qr;
  } catch (error) {
    throw error;
  }
};