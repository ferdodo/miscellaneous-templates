from ubuntu


# dependancies
RUN apt-get update && apt-get install pandoc -y
RUN apt-get update && apt-get install texlive -y
RUN apt-get update && apt-get install plantuml -y


# diagrams
WORKDIR /root
COPY diagrams diagrams
RUN plantuml diagrams/*


# docx
COPY README.md .
COPY template.docx template.docx
RUN mkdir dist
RUN pandoc --toc --reference-docx=template.docx README.md -o dist/README.docx