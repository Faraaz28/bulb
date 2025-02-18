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
