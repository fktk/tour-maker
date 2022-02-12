import recordsToTourString from './../../src/geoHandler'

export default async function handler(req, res) {
  const data = req.body
  const tour = await recordsToTourString(data);

  res.status(200).send(tour)
}
