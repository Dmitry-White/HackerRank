/*
  Created on Thu Jun 08 19:24 2023

  @author: Dmitry White
*/

package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"sort"
	"strconv"
	"strings"
)

/*
  TODO: Given an array, `values``, of `n`` integers and an array, `freqs``,
  representing the respective frequencies of `values`'s elements,
  construct a data set, `S``, where each `values[i]` occurs at frequency `freqs[i]`.
  Then calculate and print `S`'s interquartile range, rounded to a scale of 1 decimal place (i.e., 12.3 format).
*/

/*
  Theory

  The interquartile range (IQR) of an array is the difference between
  its first (Q1) and third (Q3) quartiles (i.e., Q3 - Q1).
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

func readInput() (int, []int, []int) {
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

	values := parseInts(arr[1])

	freqs := parseInts(arr[2])

	return n, values, freqs
}

func calcMedian(n int, arr []int) float64 {
	isOdd := n%2 == 1
	if isOdd {
		return float64(arr[n/2])
	}

	return float64(arr[n/2-1]+arr[n/2]) / 2
}

func otherQuartiles(n int, arr []int) (float64, float64) {
	isOdd := n%2 == 1
	halfLength := n / 2
	lowerHalf := arr[:halfLength]
	upperHalf := []int{}

	if isOdd {
		upperHalf = arr[halfLength+1:]
	} else {
		upperHalf = arr[halfLength:]
	}

	return calcMedian(halfLength, lowerHalf), calcMedian(halfLength, upperHalf)
}

func buildSet(n int, values []int, freqs []int) (int, []int) {
	expanded := []int{}

	for i, freq := range freqs {
		target := values[i]

		data := []int{}
		for j := 0; j < freq; j++ {
			data = append(data, target)
		}

		expanded = append(expanded, data...)
	}

	sort.Ints(expanded)

	return len(expanded), expanded
}

func calcIQR(n int, data []int) float64 {
	q1, q3 := otherQuartiles(n, data)

	return q3 - q1
}

func interquartileRange() {
	n, values, freqs := readInput()

	m, data := buildSet(n, values, freqs)

	iqr := calcIQR(m, data)

	fmt.Printf("%0.1f", iqr)
}

func main() {
	interquartileRange()
}
