// Utility to get upcoming weekdays from today, extending to next month if needed
export const generateAvailableDates = (desiredCount = 20) => {
  const today = new Date();
  const dates: string[] = [];

  let currentDate = new Date(today);

  while (dates.length < desiredCount) {
    const dayOfWeek = currentDate.getDay(); // 0 = Sunday, 6 = Saturday

    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      // Weekday, add to list
      const formatted = currentDate.toISOString().split("T")[0];
      dates.push(formatted);
    }

    // Move to next day
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
};

// Utility to generate time slots (e.g., every hour from 09:00 to 17:00)
export const generateTimeSlots = (selectedDate = new Date().toISOString().split("T")[0]) => {
  const slots: string[] = [];
  const startHour = 9;
  const endHour = 18;

  const now = new Date();
  const isToday = selectedDate === now.toISOString().split("T")[0];

  for (let hour = startHour; hour <= endHour; hour++) {
    const formatted = `${hour.toString().padStart(2, "0")}:00`;

    if (isToday) {
      if (hour > now.getHours()) {
        slots.push(formatted);
      }
    } else {
      slots.push(formatted);
    }
  }

  return slots;
};
  
