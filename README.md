import javax.swing.*;

import java.awt.*;

class FrameDemo

{

public static void main(String arg[])

{

JFrame jf=new JFrame("PVPSIT"); 

jf.setSize(200,200); 

jf.setVisible(true);

Container c=jf.getContentPane();

c.setBackground(Color.green);

}

}




import java.awt.*;

import javax.swing.*;

/*

<applet code="JTextFieldDemo" width=300 height=50>

</applet>

*/

public class JTextFieldDemo extends JApplet

{

JTextField jtf;

public void init()

{

// Get content pane

Container contentPane = getContentPane();

contentPane.setLayout(new FlowLayout());

// Add text field to content 

pane jtf = new JTextField(10); 

contentPane.add(jtf);

}

}


maths
# **Practical 6 - Probability**

import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
np.random.randint(1, 10, 5)

A = ['H', 'T']
S = np.random.choice(A, 1000)
Event_A = []
Event_B = []
for i in S:
  if i == 'H':
    Event_A.append(1)
  else:
    Event_B.append (1)

print(len(Event_A) / len(S))


n = 1000
Prob = []
for i in range(n):
  if np.random.choice(['H', 'T']) == 'H':
    Prob.append(1)
  else:
    pass

len(Prob) / n


plt.hist(Prob)

P = []
for n in range(1, 1001):
  Prob = []
  for i in range(n):
    if np.random.choice(['H', 'T']) == 'H':
      Prob.append(1)
    else:
      pass
  P.append(len(Prob) / n)

plt.figure(figsize=(5, 3))
plt.plot(range(1, 1001), P, c='k')
plt.axhline(0.5, color='w', ls='--')


P = []
for n in range(1, 1001):
  Prob = []
  for i in range(n):
    if np.random.choice([1, 2, 3, 4, 5, 6]) == 1:
      Prob.append(1)
    else:
      pass
  P.append(len(Prob) / n)

plt.figure(figsize=(5, 3))
plt.plot(range(1, 1001), P, c='r')
plt.axhline(1/6, color='k', ls='--')

plt.hist(P)

P = []
for i in range(1, 1000):
  P.append(list(np.random.choice(['H', 'T'], 10)).count('H') / 10)

plt.figure(figsize=(2, 2))
plt.hist(P)
plt.scatter(np.mean(P), 0, color = 'r', s=30)

P = []
for i in range(1, 1000):
  P.append(list(np.random.choice([1, 2, 3, 4, 5, 6], 10)).count(1) / 10)

plt.figure(figsize=(3, 3))
plt.hist(P, density=True)
plt.scatter(np.mean(P), 0, color = 'r', s=30)

# **Practical 7 - Conditional Probability**

import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

Set = ['R', 'R', 'B', 'B', 'B', 'B', 'B']
# n = 1000
Prob = []
for n in range(1, 1000):
  P = []
  for i in range(n):
    if np.random.choice(Set) == 'R':
      P.append(1)
    else:
      pass

  Prob.append(len(P) / n)

plt.figure(figsize=(5, 3))
plt.plot(range(1, 1000), Prob, c='r')
plt.axhline(2/7, color='k', ls='--')

# With Replacement
A = ['B', 'B', 'R', 'R', 'R', 'R', 'R']
Prob = []
for i in range(1, 1000):
  P = []
  for j in range(i):
    if list(np.random.choice(A, 2)) == ['R', 'B']:
      P.append(1)
    else:
      pass

  Prob.append(len(P) / i)

plt.figure(figsize=(5, 3))
plt.plot(range(1, 1000), Prob, c='r')
plt.axhline(10/49, color='k', ls='--')

B = ['B', 'B', 'R', 'R', 'R', 'R', 'R']
Prob = []
for i in range(1, 1000):
  P = []
  for j in range(i):
    if list(np.random.choice(B, 2, replace=False)) == ['R', 'B']:
      P.append(1)
    else:
      pass
  Prob.append(len(P) / i)

plt.figure(figsize=(5, 3))
plt.plot(range(1, 1000), Prob, c='r')
plt.axhline(5/21, color='k', ls='--')

theta = 2
theta_cap = []
for i in range(1000):
  theta_cap.append(np.mean(np.random.normal(theta, 1, 500)))

print(np.mean(theta_cap))

plt.hist(theta_cap)
plt.title("Theta")

sig_sq = 2
n = 50
sig_sq_cap = []
for i in range(1000):
  x = np.random.normal(0, sig_sq, n)
  sig_sq_cap.append(np.sqrt(np.mean(np.random.normal(0, sig_sq, n)**2)))

plt.hist(sig_sq_cap)

# **Practical 11**

import numpy as np
import matplotlib.pyplot as plt

X = np.array([1, 2, 3, 4, 5])
Y = np.array([2, 4, 5, 4, 7])

E_XY = np.mean(X * Y)
E_X = np.mean(X)
E_Y = np.mean(Y)
Var_X = np.var(X)

a = (E_XY - E_X * E_Y) / (Var_X)
b = E_Y - a * E_X

xx = np.linspace(0, 6, 100)
plt.figure(figsize=(4, 3))
plt.plot(xx, a * xx + b, c='k', ls='--')
plt.scatter(X, Y)
plt.scatter(6, a * 6 + b)
plt.show()

import numpy as np
import matplotlib.pyplot as plt

X = np.array([0, 5, 10, 15, 20, 25, 30, 35, 40, 45])
Y = np.array([72, 75, 80, 85, 90, 88, 82, 78, 75, 72])

E_XY = np.mean(X * Y)
E_X = np.mean(X)
E_Y = np.mean(Y)
Var_X = np.var(X)

a = (E_XY - E_X * E_Y) / (Var_X)
b = E_Y - a * E_X

xx = np.linspace(0, 55, 1000)
plt.figure(figsize=(4, 3))
plt.plot(xx, a * xx + b, c='k', ls='--')
plt.scatter(X, Y)
plt.show()


