import { Request, Response } from "express";
import PDFDocument from "pdfkit";
import Certificate from "../models/Certificate";

export const generateCertificate = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userName, eventName } = req.body;

    const doc = new PDFDocument();

    const fileName = `certificate-${Date.now()}.pdf`;

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${fileName}`
    );

    res.setHeader(
      "Content-Type",
      "application/pdf"
    );

    doc.pipe(res);

    doc.fontSize(28);
    doc.text(
      "CERTIFICATE OF PARTICIPATION",
      {
        align: "center",
      }
    );

    doc.moveDown();

    doc.fontSize(18);

    doc.text(
      `This certificate is proudly awarded to`,
      {
        align: "center",
      }
    );

    doc.moveDown();

    doc.fontSize(24);

    doc.text(userName, {
      align: "center",
    });

    doc.moveDown();

    doc.fontSize(18);

    doc.text(
      `For successfully attending`,
      {
        align: "center",
      }
    );

    doc.moveDown();

    doc.fontSize(22);

    doc.text(eventName, {
      align: "center",
    });

    doc.end();

    await Certificate.create({
      userName,
      eventName,
      issuedAt: new Date(),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};