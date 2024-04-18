function createAccount(pin, initialDeposit) {
  let balance = initialDeposit || 0; 

  return {
      checkBalance: function(enteredPin) {
          if (enteredPin === pin) {
              return `$${balance}`;
          } else {
              return "Invalid PIN.";
          }
      },
      deposit: function(enteredPin, amount) {
          if (enteredPin === pin) {
              balance += amount;
              return `Successfully deposited $${amount}. Current balance: $${balance}.`;
          } else {
              return "Invalid PIN.";
          }
      },
      withdraw: function(enteredPin, amount) {
          if (enteredPin === pin) {
              if (amount > balance) {
                  return "Withdrawal amount exceeds account balance. Transaction cancelled.";
              } else {
                  balance -= amount;
                  return `Successfully withdrew $${amount}. Current balance: $${balance}.`;
              }
          } else {
              return "Invalid PIN.";
          }
      },
      changePin: function(oldPin, newPin) {
          if (oldPin === pin) {
              pin = newPin;
              return "PIN successfully changed!";
          } else {
              return "Invalid PIN.";
          }
      }
  };
}

module.exports = { createAccount };
