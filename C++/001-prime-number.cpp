#include <iostream>
using namespace std;

int main()
{
    int num;
    cout << "Enter a number: ";
    cin >> num;

    int i = 2;

    while (i < num)
    {
        bool isPrime = true;
        int j = 2;
        while (j <= i / 2)
        {
            if (i % j == 0)
            {
                isPrime = false;
                break;
            }
            j++;
        }
        if (isPrime)
        {
            cout << i << " is a prime number.\n";
        }
        else
        {
            cout << i << " is not a prime number.\n";
        }

        i++;
    }

    return 0;
}
