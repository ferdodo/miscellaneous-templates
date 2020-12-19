FROM haskell as build-img-merger


# cabal dependancies
RUN cabal update
RUN cabal install --lib JuicyPixels 
RUN cabal install --lib vector 
RUN cabal install --lib conversion 


# build imgMerger binaries
COPY imgMerger /imgMerger
RUN make -C imgMerger/src