export const getGreeting = () => {
    const date = new Date();
    const hour = date.getHours();
  
    let greeting = '';
  
    if (hour < 12) {
      greeting = 'Morning';
    } else if (hour < 18) {
      greeting = 'Afternoon';
    } else {
      greeting = 'Evening';
    }
  
    return `Good ${greeting}`;
};
  