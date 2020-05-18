/* Working with arrays and functions
 * Author:
 * Last modified on:
 * Known bug
 */
#include <iostream>
using namespace std;

const int CAPACITY = 20;
int content(int ar[], int size);
//ToDo: Declare a function that displays the content of an int array, both the array and
//   the size of array will be passed as parameters to the function


//TODO: Declare a function that tests whether a given int array contains duplicate
// value or not.
void copies(int ar[], int size);


//TODO: Declare a function that searches for a value in a given int array, it returns
// -1 if the value does not occur in the array; if the value occurs in the array,
// the function returns the index of its first occurance.
void searching(int ar[], int size, int search);



//TODO: Declare a function that deletes the element stores in a spcified position from the array


/*
  inserts a value into a given position in an array of int
   if the given position is occupied, that number and its subsequent numbers will
   shifted to the right of the array.
  @param array: the int array that the value is to be inserted into
  @param array_size: the current size of the array. Upon successful
                    insertion, the array_size will be increased by 1
  @param value: the value to be inserted
  @param index: the value is supposed to be inserted into the given index
  @return -1 if the array is already full, cannot insert a new value
          otherwise, return the index of the new value in the array
  @precondition: index is less than array_size
 */
int InsertValueIntoArray (int array[], int & array_size, int value, int index);


int main()
{
 // As the NumArray can be partially filled, we use variable NumArraySize to keep track of how many numbers
 // have been stored in the array.
    int NumArray[CAPACITY];	// a int array with a given capacity
    int NumArraySize = 0;  // the array is initially empty, i.e., contains 0 elements

 //1. TODO: Prompt the user to enter a sequence of integer values, separated by space, and ended with -1,
  //        and store the values in the array
  //       Display the array afterwards
    cout<< "Insert up to 20 values for this array";
    int userInput = 0;
    int i = 0;
    while((userInput >= 0)&& NumArraySize < 20)
    {
        cin >> NumArray[i];
        userInput = NumArray[i];
        i++;
        if(userInput>=0)
            NumArraySize++;
    }





 //2. TODO: Call your function to report whether the array contain duplicate values or not
   // copies(NumArray, NumArraySize);


  //3. TODO: Call your function to search for value 50.
    //searching(NumArray[],NumArraySize, 50);



  // 4. Call your function to insert a value (entered by the user) to a given position (entered by the user)
  // of the array
  //       Display the content of the array afterwards
  //


  // 5. Call your function to delete the values stored in position 0 and 2
  // Display the content of the array after the deletion.
    return 0;
}
int content(int ar[], int size)
{
    for (int i = 0; i < size; i++)
    {
        cout << ar[i] << endl;
    }

}
void copies(int ar[], int size)
{
    for (int i=0; i < (size-1); i++)
    {
        if(ar[i] == ar[i+1])
        {
            cout << "There is a duplicate";
        }
    }
    return;
}
int InsertValueIntoArray (int array[], int & array_size, int value, int index)
{
    if(arra_size == CAPACITY)
    {
        return -1;
    }
    else
    {
        for(int x = array_size+1; x > index; x--)
        {
            array[x]=array[x-1];
        }
    array[index]= value;
    array_size++;
    return index;
    }

}
void searching(int ar[], int size, int search)
{
    for(int i = 0; i < size; i++)
    {
        if (search == ar[i])
        {
            cout << "Value 50 is in index " << ar[i];
        }
        else ()
        {
            cout << "Value 50 isn't here";
        }
    }
}
//TODO: Implement all functions
