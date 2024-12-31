const express = require("express");
const {
  getAllEvents,
  deleteEvent,
  eventLink,
  getPaginatedUpcomingEvents
} = require("../controllers/eventController");
const { celebrate, Joi, Segments,errors } = require("celebrate");
const {protect} = require("../controllers/employeeController");
const router = express.Router();

router.get(
  "/event/getallevent",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      timeFrame: Joi.string().valid('Last week', 'One month').optional(),
      page: Joi.number().integer().min(1).optional(), // Validate page number
    }),
  }),
  getAllEvents
);

router.delete(
  "/event/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().hex().length(24).required(), // Assuming MongoDB ObjectId format
    }),
  }),
  protect,
  deleteEvent
);

router.post("/eventLink", celebrate({
  [Segments.BODY]: Joi.object().keys({
    link: Joi.string().uri().required(),
    eventDate: Joi.date().iso().required(), // Validate eventDate as an ISO date (YYYY-MM-DD)
  })
}),
protect,
eventLink
);

router.get(
  '/event/upcoming',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number().integer().min(1).optional(), // Validate the page query parameter
    }),
  }),
  getPaginatedUpcomingEvents
);

router.use(errors());

module.exports = router;