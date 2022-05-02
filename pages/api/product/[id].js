import nc from 'next-connect';
import client from '../../../utils/client';

const handler = nc();

handler.get(async (req, res) => {
  const product = await client.fetch(
    `*[_type == "foodProduct" && _id == $id][0]{_id, title, slug, description, price, mainImage, "category":category[] -> title}`,
    { id: req.query.id }
  );
  res.send(product);
});

export default handler;
