/*
  Created on Sun Jun 04 21:27 2023

  @author: Dmitry White
*/

package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"
)

/*
  TODO: Given an array, X, of N integers, calculate and print
  the respective mean, median, and mode on separate lines.
  If your array contains more than one modal value, choose the numerically smallest one.

  Note: Other than the modal value (which will always be an integer),
  your answers should be in decimal form,
  rounded to a scale of  decimal place (i.e., 12.3, 7.0 format).
  Read input from STDIN. Print output to STDOUT.
*/

/*
  Theory

  Mean
  The average of all the integers in a set of values.

  Median
  The midpoint value of a data set for which
  an equal number of samples are less than and greater than the value.
  For an odd sample size, this is the middle element of the sorted sample;
  for an even sample size, this is the average of the 2 middle elements of the sorted sample.

  Mode
  The element(s) that occur most frequently in a data set.
  If more than one element occurs most frequently, the lesser is chosen.

  Precision
  Refers to the number of significant digits in a number.
  For example, the numbers 123.45 and 0.012345 both have a precision of 5.

  Scale
  Refers to the number of significant digits to the right of the decimal point.
*/

func calcMean(x []int) float64 {
	return 0.0
}

func calcMedian(x []int) float64 {
	return 0.0
}

func calcMode(x []int) float64 {
	return 0.0
}

func meanMedianMode() {
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
	fmt.Println("N:", n)

	x := []int{}
	for _, v := range strings.Split(arr[1], " ") {
		num, err := strconv.Atoi(v)
		if err != nil {
			log.Fatalln("X element is not correct")
		}
		x = append(x, num)
	}
	fmt.Println("X:", x)
	fmt.Printf("%#v\n", x)

}

func main() {
	meanMedianMode()
}
