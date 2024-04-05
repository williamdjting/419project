import fs from 'fs';
import path from 'path';

import { NextResponse } from 'next/server'

// export default async function handler(req, res) {

//   res.status(200).json({ text: 'Hello' });
  // console.log("line 5")
  // const { submittedData } = req.body;

  // const csvContent = `ProjectID,Collection,Distribution,Quality,Split,Bias,Influence,Outcome\n${Object.values(submittedData).join(',')}`;

  // try {
  //   const filePath = path.join(process.cwd(), 'data', 'submittedData.csv'); // Adjust the path as needed
  //   fs.writeFileSync(filePath, csvContent);
  //   res.status(200).json({ success: true });
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({ success: false, error: 'Failed to write CSV file' });
  // }
// }

// export async function GET() {
//   return NextResponse.json({
//     hello: 'world',
//   })

// }

export default async function handler(req, res) {

  res.status(200).json({ text: 'Hello' });

}