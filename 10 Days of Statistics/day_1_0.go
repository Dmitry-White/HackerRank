/*
Created on Tue Jun 06 22:35 2023

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
  TODO: Given an array, X, of N integers, calculate the respective first quartile (Q1),
  second quartile (Q2), and third quartile (Q3).
  It is guaranteed that Q1, Q2, and Q3 are integers.

  Theory

  The quartiles of an ordered data set are the 3 points that
  split the data set into 4 equal groups.
  The 3 quartiles are defined as follows:
    Q1: The first quartile is the middle number between the smallest number in a data set and its median.
    Q2: The second quartile is the median (50th percentile) of the data set.
    Q3: The third quartile is the middle number between a data set's median and its largest number.

  Compute Method:
  We will split the data into two halves, lower half and upper half:
    - If there are an odd number of data points in the original ordered data set,
      do not include the median (the central value in the ordered list) in either half.
    - If there are an even number of data points in the original ordered data set,
      split this data set exactly in half.
  The value of the first quartile (Q1) is the median of the lower half
  and the value of the third quartile (Q3) is the median of the upper half.
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

func quartiles() {
	n, x := readInput()
	fmt.Printf("n: %d, x: %v", n, x)

	fmt.Printf("Not Implemented")
}

func main() {
	quartiles()
}
