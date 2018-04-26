export default interface Navigatable {

    /**
     * Initialize navigation, set focus to first element
     * 
     * @memberof Navigatable
     */
    navigationFirst(): void;

    /**
     * Navigate and set focus of the next element
     * 
     * @memberof Navigatable
     */
    navigationNext(): void;

    /**
     * Navigate and set foucs to the previous element
     * 
     * @memberof Navigatable
     */
    navigationPrev(): void;
}