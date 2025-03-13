import streamlit as st
#st.title("Hello World")
import time

def main():
    st.title("Migration Pro")
    st.write("This tool helps you plan your migration to AWS by analyzing your current infrastructure, providing recommendations, and estimating costs. Start by describing your current infrastructure below, optionally upload any configuration file, and the tool will provide a detailed migration plan.")
    # Sidebar
    st.sidebar.header("Migration Pro")
    page = st.sidebar.radio("Go to", ["Home", "Chat", "About"])

    if page == "Home":
        home_page()
    elif page == "Chat":
        chat_page()
    elif page == "About":
        about_page()

def home_page():
    #st.header("Home Page")
    
    # File upload
    st.subheader("Upload Config Files")
    uploaded_file = st.file_uploader("Choose a file", type=["txt", "pdf", "csv"])
    if uploaded_file is not None:
        st.success(f"File {uploaded_file.name} uploaded successfully!")

    # Multi-line input spaces
    #st.subheader("Multi-line Input Spaces")
    
    text_input1 = st.text_area("Discovery Agent", "Enter your text here", height=150)
#send data from text_input1 to agents
    text_input2 = st.text_area("Analysis Agent", "Enter your text here", height=150)

    text_input3 = st.text_area("Recommendation Agent", "Enter your text here", height=150)
    #st.write("You entered:", text_input3)

def chat_page():
    st.header("Chat Service")

    # Initialize chat history
    if "messages" not in st.session_state:
        st.session_state.messages = []

    # Display chat messages from history on app rerun
    for message in st.session_state.messages:
        with st.chat_message(message["role"]):
            st.markdown(message["content"])

    # React to user input
    if prompt := st.chat_input("What is up?"):
        # Display user message in chat message container
        st.chat_message("user").markdown(prompt)
        # Add user message to chat history
        st.session_state.messages.append({"role": "user", "content": prompt})

        response = f"Echo: {prompt}"
        # Display assistant response in chat message container
        with st.chat_message("assistant"):
            st.markdown(response)
        # Add assistant response to chat history
        st.session_state.messages.append({"role": "assistant", "content": response})

def about_page():
    st.header("About Page")
    #st.write("This is the about page. Add your content here.")

if __name__ == "__main__":
    main()
