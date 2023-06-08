/*
  Created on Thu Jun 08 21:52 2023

  @author: Dmitry White
*/

package main

import (
	"bufio"
	"fmt"
	"log"
	"math"
	"os"
	"strconv"
	"strings"
)

/*
  TODO: Given an array, arr, of n integers, calculate and print the standard deviation.
  Your answer should be in decimal form, rounded to a scale of 1 decimal place (i.e., 12.3 format).
  An error margin of +/- 0.1 will be tolerated for the standard deviation.
*/

/*
  Theory

  Expected Values
  The expected value of a discrete random variable, X, is more or less another way of referring to the mean (μ).
  We can also refer to this as the mathematical expectation (or just the expectation) of X.

  Variance σ^2
  This is the average magnitude of fluctuations of X from its expected value, μ.
  You can also think of it as the expectation of a random variable's squared deviation from its mean.
  Given a data set, X, of size n:
    σ^2 = sum(Xi - μ)^2 / n,
    where Xi is the ith element of the data set and μ is the mean of all the elements.

  Standard Deviation σ
  Standard Deviation - the average distance to the mean.
  The standard deviation quantifies the amount of variation in a set of data values.
  Given a data set, X, of size n:
    σ = sqrt(sum(Xi - μ)^2 / n),
    where Xi is the ith element of the data set and μ is the mean of all the elements.
*/

func parseInts(str string) []int {
	x := []int{}
	for _, v := range strings.Split(str, " ") {
		num, err := strconv.Atoi(v)
		if err != nil {
			log.Fatalln("X element is not correct")
		}
		x = append(x, num)
	}
	return x
}

func readInput() (int, []int) {
	arr := []string{}
	scanner := bufio.NewScanner(os.Stdin)
	for {
		scanner.Scan()
		text := scanner.Text()
		if len(text) != 0 {
			arr = append(arr, text)
		} else {
			break
		}
	}

	n, err := strconv.Atoi(arr[0])
	if err != nil {
		log.Fatalln("N is not correct")
	}

	x := parseInts(arr[1])

	return n, x
}

func calcMean(n int, x []int) float64 {
	sum := 0.0
	for _, v := range x {
		sum += float64(v)
	}
	return sum / float64(n)
}

func calcStandardDeviation(n int, x []int) float64 {
	mu := calcMean(n, x)

	sum := 0.0
	for _, v := range x {
		diff := float64(v) - mu
		sum += math.Pow(diff, 2)
	}

	sigma := math.Sqrt(sum / float64(n))
	return sigma
}

func standardDeviation() {
	n, x := readInput()

	sigma := calcStandardDeviation(n, x)

	fmt.Printf("%0.1f", sigma)
}

func main() {
	standardDeviation()
}
