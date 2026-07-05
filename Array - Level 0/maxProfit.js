// Problem: Find the maximum profit from buying and selling a stock once.
// Given an array of stock prices for each day, determine the largest difference
// between a selling price and a buying price where the buy happens before the sell.
// If no profit is possible, return 0.
//
// Example:
// prices = [7, 1, 5, 3, 6, 4]
// Result: 5 (buy at 1, sell at 6)
//
// LeetCode reference:
// - Problem #121: Best Time to Buy and Sell Stock
// - Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// Note: Approach 1 below is the accepted optimal solution (single pass, O(n) time, O(1) space).

// ============================================
// Approach 1: Single-pass tracking minimum and maximum profit
// Formula/Logic: profit = current_price - min_price_seen_so_far. Track the minimum price encountered and calculate profit at each step.
// - Track the minimum price seen so far as we iterate through the array.
// - At each price, calculate the profit if we sold at that price.
// - Keep track of the maximum profit encountered.
// - Update the minimum price if current price is lower.
// Time complexity: O(n) because we iterate through the array once.
// Space complexity: O(1) because we only use two variables regardless of input size.
function maxProfit(prices) {
  let min = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min;
    }
    if (prices[i] < min) {
      min = prices[i];
    }
  }
  return maxProfit;
}

// ============================================
// Best Approach: Single-pass tracking minimum and maximum profit
// Why: Achieves optimal O(n) time with O(1) space in a single iteration without sorting or nested loops.
// Time complexity: O(n), Space complexity: O(1)
// Use case: Interview-ready solution; production-grade for real-time stock price processing.
// ============================================
