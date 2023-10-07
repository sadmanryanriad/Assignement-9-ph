import Calendar from "./Calendar";

const CalendarBox = () => {
  return (
    <div className="text-neutral-700 dark:text-neutral-300">
      <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
        <h3 className="mb-6 text-3xl font-bold">Choose Your Date</h3>
        <p className="mb-6 pb-2 md:mb-12 md:pb-0">
          Choose the date you want to book for your event. We will do our best to organize your event
        </p>
      </div>
      {/* <div className="max-w-fit mx-auto bg-base-200 p-3 md:p-10 rounded-lg"><Calendar></Calendar></div> */}
      <div>
      <Calendar></Calendar>
      </div>
    </div>
  );
};

export default CalendarBox;
