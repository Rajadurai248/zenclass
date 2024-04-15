class UberPriceCalculator {
    constructor(baseFare, costPerKm, costPerMinute, surgeMultiplier = 1) {
        this.baseFare = baseFare;
        this.costPerKm = costPerKm;
        this.costPerMinute = costPerMinute;
        this.surgeMultiplier = surgeMultiplier;
    }

    calculatePrice(distanceInKm, timeInMinutes) {
        // Apply surge pricing
        const totalFare = this.baseFare +
            (distanceInKm * this.costPerKm) +
            (timeInMinutes * this.costPerMinute);

        return totalFare * this.surgeMultiplier;
    }
}

// Example usage:
const uberX = new UberPriceCalculator(50, 10, 2); // Base fare: ₹50, Cost per km: ₹10, Cost per minute: ₹2
console.log("Rs:",uberX.calculatePrice(10, 20),"/-"); // Output: ₹250 (assuming no surge)