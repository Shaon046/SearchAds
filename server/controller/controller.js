import ads from "../schema/adsSchema.js";

export const getAds = async (req, res) => {
  const queryString = req.query.search;

  console.log(queryString);

  try {
    const allAds = await ads.aggregate([
      {
        $lookup: {
          from: "companies",
          localField: "companyId",
          foreignField: "_id",
          as: "company",
        },
      },
      {
        $project: {
          _id: 1,
          companyId: 1,
          primaryText: 1,
          headline: 1,
          description: 1,
          CTA: 1,
          imageUrl: 1,
          company: 1,
        },
      },
      { $unwind: "$company" },
    ]);

    const mainData = allAds.filter((data) =>
      (data.primaryText + data.headline + data.description + data.company.name)
        .toLowerCase()
        .includes(queryString.toLowerCase())
    );

    res.status(200).json(mainData);
  } catch (err) {
    res.status(404).json({ Error: err });
  }
};
