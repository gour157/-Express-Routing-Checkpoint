module.exports = (req, res, next) => {
 const date = new Date();
 const day = date.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
 const hour = date.getHours();
 
 // Check if current time is within working hours (Monday-Friday, 9AM-5PM)
 const isWorkingDay = day >= 1 && day <= 5; // Monday to Friday
 const isWorkingHour = hour >= 9 && hour < 17; // 9AM to 5PM
 
 if (isWorkingDay && isWorkingHour) {
   next(); // Continue to the requested route
 } else {
   res.sendFile(path.join(__dirname, '..', 'views', 'closed.html'));
 }
};